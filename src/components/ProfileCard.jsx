function ProfileCard({ user }) {
  return (
    <div 
    data-cy="profile-card"
    className="max-w-xl mx-auto rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-8 text-center hover:scale-[1.02] transition duration-300">
      <div className="... animate-fade-in">
      <img
        data-cy="profile-avatar"
        src={user.avatar_url}
        alt={user.name || user.login}
        className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.45)]"
      />

      <h2
      data-cy="profile-name"
      className="mt-5 text-3xl font-bold text-white">
        {user.name || "Sem nome"}
      </h2>

      <p
      data-cy="profile-login"
      className="mt-1 text-slate-400 text-lg">@{user.login}</p>

      <p className="mt-4 text-slate-300 leading-7 max-w-md mx-auto">
        {user.bio || "Este usuário não possui uma bio."}
      </p>

      <div className="mt-7 grid grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-2xl font-bold text-white">{user.followers}</p>
          <p className="text-sm text-slate-400 mt-1">Followers</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-2xl font-bold text-white">{user.following}</p>
          <p className="text-sm text-slate-400 mt-1">Following</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-2xl font-bold text-white">{user.public_repos}</p>
          <p className="text-sm text-slate-400 mt-1">Repos</p>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center mt-8 h-12 px-7 rounded-2xl bg-white text-slate-900 font-semibold shadow-md transition hover:bg-slate-200 hover:scale-[1.02]"
      >
        Ver perfil
      </a>
    </div>
    </div>
  );
}

export default ProfileCard;