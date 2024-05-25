interface ThemeTypes {
  primary: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
}
const useGetTheme = () => {
  let colormain = '#CEFC86';
  let mainTheme: ThemeTypes = {
    primary: `bg-[${colormain}]`,
    secondary: 'bg-black',
    textPrimary: 'text-[#CEFC86]',
    textSecondary: 'text-white',
  };

  return {colormain, mainTheme};
};

export default useGetTheme;
