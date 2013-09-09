
window.angular.module('ngff.services.epl',[])
    .factory('EPL',function(){
       var EPL ={};

        EPL.teams = [

            {"team":"Arsenal", "city":"London Borough of Islington", "nickname": "Gunners"},
            {"team":"Aston Villa", "city":"Aston, Birmingham", "nickname": "Cardinals"},
            {"team":"Cardiff City", "city":"Cardiff,Wales", "nickname": "Cardinals"},
            {"team":"Chelsea", "city":"London", "nickname": "Cardinals"},
            {"team":"Crystal Palace", "city":"London", "nickname": "Cardinals"},
            {"team":"Everton", "city":"Liverpool", "nickname": "Cardinals"},
            {"team":"Fulham", "city":"London", "nickname": "Cardinals"},
            {"team":"Hull City", "city":"Hull City", "nickname": "Cardinals"},
            {"team":"Liverpool", "city":"Liverpool", "nickname": "Cardinals"},
            {"team":"Manchester City", "city":"Manchester", "nickname": "Cardinals"},
            {"team":"Manchester United", "city":"Manchester", "nickname": "Cardinals"},
            {"team":"Newcastle United", "city":"Newcastle", "nickname": "Cardinals"},
            {"team":"Norwich City", "city":"Norwich", "nickname": "Cardinals"},
            {"team":"Southampton", "city":"Southampton", "nickname": "Cardinals"},
            {"team":"Stoke City", "city":"Stoke", "nickname": "Cardinals"},
            {"team":"Sunderland", "city":"Sunderland", "nickname": "Cardinals"},
            {"team":"Swansea City", "city":"Swansea, Wales", "nickname": "Cardinals"},
            {"team":"Tottenham Hotspur", "city":"London", "nickname": "Cardinals"},
            {"team":"West Bromwich Albion", "city":"West Bromwich", "nickname": "Cardinals"},
            {"team":"West Ham United", "city":"London", "nickname": "Cardinals"},

        ];
        return EPL;
    });
