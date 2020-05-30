export interface RawMarkup {
    text: string
}

export const rawMarkupExample: RawMarkup = {
    text: "## This is an example _Markdown_ \n This is the new band **Bold is Gold** \n ### Hello World \n" +
    "This is some paragraph with bullet points \n" +
    " * Point 1 \n * Point 2 \n" +
    "\n[Im an inline-style link](https://www.google.com)"
}

export const rawMarkupCodeExample: RawMarkup = {
    text: "```\n\n" +
    "def energy():\n" +
    "   energy = (pd.read_excel('Energy Indicators.xls, index_col=None, header=None) \n" + "   [18:245].dropna(axis='columns').drop([2], axis=1).replace('...', np.nan))\n   " +
     "```"
}

    // energy.index = np.arange(0, len(energy))
    // energy.columns = ['Country', 'Energy Supply', 'Energy Supply per Capita', '% Renewable']
    // energy['Energy Supply'] = energy['Energy Supply'].apply(lambda x: x * 1000000)

    // for key in rename_country:
    //     energy['Country'] = energy['Country'].replace(key, rename_country[key])

    // energy['Country'] = energy['Country'].str.replace(r"\(.*\)","")
    
    // energy['Country'] = energy['Country'].str.rstrip()
    // return energy