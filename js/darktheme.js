document.getElementById('checkbox').addEventListener('click', function() {
    if (!night) {
        document.body.style.background='linear-gradient(to top, #262725, DimGray)'
        document.getElementById('prog').style.background='#737373'
        document.getElementById('prog').style.transition='0.5s'
        document.getElementById('prog').style.color='white'
        document.getElementById('prog').style.transition='0.5s'
        document.getElementById('news').style.background='#737373'
        document.getElementById('news').style.color='white'
        document.getElementById('news').style.transition='0.5s'
        document.getElementById('news_l').style.background='#737373'
        document.getElementById('news_l').style.color='white'
        document.getElementById('news_l').style.transition='0.5s'
        document.getElementById('news_w').style.background='#737373'
        document.getElementById('news_w').style.color='white'
        document.getElementById('news_w').style.transition='0.5s'
        document.getElementById('news_q').style.background='#737373'
        document.getElementById('news_q').style.color='white'
        document.getElementById('news_q').style.transition='0.5s'
        document.getElementById('news_aga').style.background='#737373'
        document.getElementById('chat').style.background='#737373'
        document.getElementById('chat').style.transition='0.5s'
        night = true
    }
    else {
        document.body.style.background='linear-gradient(to top, #cccccc, white)'
        document.getElementById('prog').style.background='white'
        document.getElementById('prog').style.color='black'
        document.getElementById('news').style.background='white'
        document.getElementById('news').style.color='black'
        document.getElementById('news_l').style.background='white'
        document.getElementById('news_l').style.color='black'
        document.getElementById('news_w').style.background='white'
        document.getElementById('news_w').style.color='black'
        document.getElementById('news_q').style.background='white'
        document.getElementById('news_q').style.color='black'
        document.getElementById('news_aga').style.background='white'
        document.getElementById('chat').style.background='#e4e4e4'
        document.getElementById('chat').style.transition='0.5s'
        night = false
    }
})
