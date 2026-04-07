import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [username, setUsername] = useState("");

  function handleSearch() {
    onSearch(username);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-3">
      
      <div className="relative flex-1">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        </span>

        <input
          data-cy="search-input"
          type="text"
          placeholder="Digite um usuário do GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full h-14 pl-12 pr-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-[0_0_20px_rgba(59,130,246,0.4)] shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        />
      </div>

      <button
        data-cy="search-button"
        onClick={handleSearch}
        disabled={loading}
        className="h-14 px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-[0_0_40px_rgba(59,130,246,0.5)] transition hover:scale-[1.02] hover:from-blue-500 hover:to-cyan-400 disabled:opacity-50 active:scale-[0.97]"
      >
        {loading ? "Buscando..." : "Buscar"}
      </button>
    </div>
  );
}

export default SearchBar;