const startWord = () => {
    let myword = document.getElementById("myword").value
    let word = document.getElementById("word").innerText

    let lastWord = word[word.length - 1]
    let firstword = myword[0]
    
    if(lastWord === firstword) {
        // 정답일 때
        document.getElementById("result").innerText = "정답입니다!!"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    } else {
        // 오답일 때
        document.getElementById("result").innerText = "오답!"
        document.getElementById("myword").value = ""
    }

}

const startlotto = () => {
    let lotto = [];

    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 45) + 1;

        // 중복 체크
        while (lotto.includes(num)) {
            num = Math.floor(Math.random() * 45) + 1;
        }

        lotto.push(num);
    }

    lotto.sort(function(a, b) {
        return a - b;
    });

    // 생성된 로또 번호를 HTML 요소에 적용
    for (let i = 0; i < 6; i++) {
        document.getElementById(`number${i + 1}`).textContent = lotto[i];
    }
}