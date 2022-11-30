// AppTheme is basic type for the themes based on dark theme
export type AppTheme = typeof dark;

const dark = {
  name: "dark",
  background: "#5e5c64",
  components: {
    background: "#7a7880",
    shadow1: "#504e55",
    shadow2: "#6c6a73",
    active: "#e5ebf5",
    nonActive: "#9baacf",
    primary: "#6d5dfc",
    danger: "#dc3545",
    warning: "#ffca2c",
  },
  font: {
    regular: "#E4EBF5",
    button: "#E4EBF5",
    warning: "#5e5c64",
    valid: "#49fb4f",
    invalid: "#ff9ea5",
  },
};

const light: AppTheme = {
  name: "light",
  background: "#e4ebf5",
  components: {
    background: "#DEE7F2",
    shadow1: "#c8d0e7",
    shadow2: "#FFF",
    active: "#e4ebf5",
    nonActive: "#9baacf",
    primary: "#6d5dfc",
    danger: "#dc3545",
    warning: "#ffca2c",
  },
  font: {
    regular: "#5e5c64",
    button: "#E4EBF5",
    warning: "#5e5c64",
    valid: "#198754",
    invalid: "#dc3545",
  },
};

export const Themes: Record<string, AppTheme> = { dark, light };
