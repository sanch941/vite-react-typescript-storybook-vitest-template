export const i18nAdapter = (strDev: string, strProd: string): string => {
    if (!import.meta.env.PROD) {
        return strDev;
    }

    return strDev;

    // return i18n.__(strProd);
};
