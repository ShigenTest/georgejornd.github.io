stats = [
    {tags:['каталина', 'fasd'],title:'MacOs Catalina',text:'Поддерживать новую операционную систему из ноутбуков Apple официально будут Macbook Air, Macbook Pro, Mac Mini, iMac, выпущенные с середины 2012 года или позже. А также все iMac Pro, Mac Pro - с середины 2013 года или позднее, Macbook – с начала 2015 года и позднее. Иными словами, все компьютеры, имеющие предустановленную OS X 10.9 Mavericks на борту или более новую. macOS Catalina может быть успешно также установлена и на компьютеры, выпущенные не Apple (что именуется на жаргоне как Hackintosh). Общими минимальными системными требованиями для установки является Intel i5-процессор, и Intel HD Graphics от 4000 и выше, 4 ГБ ОЗУ, и около 20 ГБ места на жестком диске.',link:'catalina_more'},
    {tags:['sika'],title:'MacOs Catalina',text:'If you’ve been waiting to buy a Nespresso single-serve coffee machine, now is the time to pull the trigger. The Nespresso Vertuoline coffee and espresso maker is now just $100 on Amazon, and we haven’t seen its price this low since November 2018. But if you’re interested, act quickly, as this is a one-day sale.'}
]
    document.getElementById('search_result')
    search_result = document.getElementById('test2')
    help = search_result
    night = false
    setInterval(function () {
        document.getElementById('chat').style.left=document.documentElement.clientWidth-50+'px'
    },50)

    document.body.onkeydown = function (e) {
        if (e.key == 'Enter') {
            return false
        }
    }
    document.addEventListener('keydown', function(e) {
        if (e.key == 'Enter') {
            find()
        }
    })
    function find() {
        if (typeof s != 'undefined') {
            if (s.length == 1 & s[0] == '') {
                document.getElementById('test2').remove()
            }
        }
        s = document.getElementById('search').value.split(' ')
        statsDraw=[]
        i = 0
        while (i < stats.length){
            m = 0
            i2 = 0
            while (i2 < stats[i]['tags'].length) {
                i3 = 0
                while (i3 < s.length) {
                    if (stats[i]['tags'][i2] == s[i3]) m++
                    i3++
                }
                i2++
            }
            statsDraw[statsDraw.length] = [m, i]
            i++
        }
        statsDraw.sort()
        search_result.remove()
        search_result = document.createElement('div')
        if (s.length == 1 & s[0] == '') {
            document.getElementById('test').prepend(help)
        }
        else {
            document.getElementById('test').prepend(search_result)
            i = 0
            ei = 0
            while (i < statsDraw.length) {
                if (statsDraw[i][0] > 0) {
                    search_result.insertAdjacentHTML("afterbegin", '<div id="search_result" class="card"><div class="card-body" id="back_prog"><h5 class="card-title">'+stats[statsDraw[i][1]]['title']+'</h5><p class="card-text">'+stats[statsDraw[i][1]]['text']+'</p><a href="'+stats[statsDraw[i][1]]['link']+'.html" class="card-link" id="button_1">Подробнее</a></div></div>')
                }
                else {
                    ei++
                }
                i++
            }
            if (ei == statsDraw.length) {
                search_result.insertAdjacentHTML("afterbegin", '<div id="search_result" class="card"><div class="card-body" id="back_prog"><p class="card-text">По вашему запросу ничего не найдено :(</p></div></div>')
            }
        }
    }
    