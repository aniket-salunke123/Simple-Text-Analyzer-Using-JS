function Analyze(text) {

    let i = 0;
    let l_count = 1;
    let w_count = 0;
    let c_count = text.length;
    let punc_count = 0;
    let sentence_count = 0;

    var punctuations = [".", ",", ":", "!", "?"];

    console.log("length : ", text.length);

    for (let i = 0; i < text.length; i++) {
        if (text[i] == '\n') {
            l_count++;
        }

        if (text[i] == ' ') {
            w_count += 2;
        }

        for (let j = 0; j < punctuations.length; j++) {
            if (text[i] == punctuations[j]) {
                punc_count++;
            }

        }

        if (text[i] == '.') {
            sentence_count++;
        }


        console.log(i, text[i]);

    }

    console.log("Lines : ", l_count);
    console.log("Words : ", w_count);
    console.log("Characters : ", c_count);
    console.log("Punctuations : ", punc_count);
    console.log("Sentences : ", sentence_count);

    // Displaying Counts On HTML SAPN
    // document.getElementById('res_lines').innerHTML = l_count;
    document.getElementById('res_words').innerHTML = w_count;
    document.getElementById('res_characters').innerHTML = c_count;
    document.getElementById('res_punc').innerHTML = punc_count;
    document.getElementById('res_sentences').innerHTML = sentence_count;

}