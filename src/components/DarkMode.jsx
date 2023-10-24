
function DarkMode({ isDarkMode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? "Mode Clair" : "Mode Sombre"}
    </button>
  );
}
export default DarkMode;
