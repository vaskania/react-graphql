export const GET_ALL_CONTINENTS = `
    query {
        continents {
            name
            code
        }
    }
`

export const GET_ALL_COUNTRIES = (code)=> {
  return `
    query {
            continent (code: "${code}"){
              countries {
                          name
                          code
                     }
                  }
              }
`
}

