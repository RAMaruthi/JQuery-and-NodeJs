const string = "the quick brown fox jumps over the lazy dog"
  const s= string.toUpperCase;
    console.log(s)
let result = ""
const words = string.split(" ")


function encrypt(w) {

    for (const i of w) {
        
        if (i == " ") result += '-'

        else {
            for (const eachWord of words) {

                if (eachWord.includes(i)) {
                    result += `${words.indexOf(eachWord)}${eachWord.indexOf(i)},`
                    break;
                }

            }
        }
    }

}