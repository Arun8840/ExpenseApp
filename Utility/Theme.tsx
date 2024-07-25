import StoreTransaction from '../Store/StoreTransaction';

export interface ThemeTypes {
  id?: any;
  primary: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
}
const useGetTheme = () => {
  const SelectedTheme = StoreTransaction(state => state?.Theme);

  let colormain = {
    primary: `bg-[${SelectedTheme?.primary}]`,
    secondary: 'bg-[black]',
    textPrimary: `text-[${SelectedTheme?.textPrimary}]`,
    textSecondary: `text-[white]`,
  };

  let defaultTheme = {
    primary: `bg-[#FFF455]`,
    secondary: 'bg-black',
    textPrimary: 'text-[#CEFC86]',
    textSecondary: 'text-white',
  };
  let isNotEmpty = Object.keys(SelectedTheme).length > 0;
  let mainTheme: ThemeTypes = isNotEmpty ? colormain : defaultTheme;

  return {colormain, mainTheme};
};

export default useGetTheme;
