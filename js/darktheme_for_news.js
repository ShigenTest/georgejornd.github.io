    document.getElementById('checkbox1').addEventListener('click', function() {
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
            document.getElementById('prog_1').style.background='#737373'
            document.getElementById('prog_1').style.color='white'
            document.getElementById('prog_1').style.transition='0.5s'           
            document.getElementById('news_aga').style.background='#737373'
            document.getElementById('top').style.background='linear-gradient(to top, #999999, #999999)'
            document.getElementById('top').style.transition='0.5s'           
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
            document.getElementById('prog_1').style.background='white'
            document.getElementById('prog_1').style.color='black'
            document.getElementById('news_aga').style.background='white'
            document.getElementById('top').style.background='linear-gradient(to top, white, white)'
            night = false
        }
    })
