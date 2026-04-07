function ErrorMessage({ message }) {
  return (
    <div data-cy="error-message"
         className="max-w-2xl mx-auto mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-4 text-center backdrop-blur-sm">
      <p className="text-red-300 font-medium">{message}</p>
    </div>
  );
}

export default ErrorMessage;