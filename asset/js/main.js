function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

function splitIntoChunk(arr, chunk) {

    let res = [];
    while (arr.length > 0) {

        let tempArray;
        tempArray = arr.splice(0, chunk);
        res.push(tempArray);
    }
    return res;
}

function removeList() {
    const parent = document.getElementById("result")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}

function pick() {
    removeList();

    let val = document.getElementById("inputName").value;
    let splice = document.getElementById("splice").value;
    let result = val.split(/\r?\n/).filter(element => element);
    //acak
    let rand = shuffle(result);
    let divide = Math.ceil(rand.length / splice);
    //pisah
    let splite = splitIntoChunk(rand, divide);
    let print = '';
    splite.forEach(function (item, index) {
        // console.log(item, index);
        let list = '';
        for (let i = 0; i < item.length; i++) {
            list += `<li> ${item[i]} </li>`;
        }
        print += `<ul>${list}</ul>`;
    });
    document.getElementById("result").innerHTML = print;
}