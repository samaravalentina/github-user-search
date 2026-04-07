import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import ErrorMessage from "./components/ErrorMessage";
import { getUser } from "./services/githubApi";
import githubLogo from "./assets/github.svg";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch(username) {
    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      setUser(null);
      setError("Digite um usuário para realizar a busca.");
      return;
    }

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await getUser(trimmedUsername);
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B1120] flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-80px] w-[360px] h-[360px] bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_35%)]" />

      <section className="relative z-10 w-full max-w-3xl rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.15)] p-6 md:p-10 animate-fade-in animate-float">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:scale-110 transition duration-300">
            <img
              src={githubLogo}
              alt="GitHub logo"
              className="w-10 h-10 object-contain"
            />
          </div>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.30em] text-blue-400">
            GitHub Search
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
            Buscar Usuário no GitHub
          </h1>

          <p className="mt-4 text-slate-300 text-base md:text-lg leading-7">
            Pesquise perfis do GitHub com uma interface elegante, moderna e
            visualmente marcante.
          </p>
        </div>

        <div className="mt-8 max-w-2xl mx-auto">
          <SearchBar onSearch={handleSearch} loading={loading} />
        </div>

        {error && <ErrorMessage message={error} />}

        {user && (
          <div className="mt-8">
            <ProfileCard user={user} />
          </div>
        )}
      </section>
    </main>
  );
}

export default App;