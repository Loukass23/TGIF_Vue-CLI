
function getListsLenght(fullList, party) {
    return fullList.filter(a => a.party == party).length;

}

function getAvVoteforParty(fullList, party) {
    var list = fullList.filter(a => a.party == party);
    if (list.length != 0) {
        var list2 = list.map(a => a.votes_with_party_pct);
        console.log(list2);
        var sum = list2.reduce((x, y) => x + y, 0);
        return (sum / list.length).toFixed(2);
    } else return 0;
}


function getLoyaltyList(fullList, leastMost) {
    var res;
    var percentage = Math.round(10 * fullList.length / 100);
    var list = fullList.sort(function (a, b) {
        return a.votes_with_party_pct - b.votes_with_party_pct
    });
    var limitLeast = list[percentage - 1];
    var limitMost = list[list.length - percentage];
    //get least and most
    if (leastMost == 'least') {
        var res = list.filter(a => a.votes_with_party_pct <= limitLeast.votes_with_party_pct);
    } else {
        var list2 = list.filter(a => a.votes_with_party_pct >= limitMost.votes_with_party_pct);
        res = list2.sort(function (a, b) {
            return b.votes_with_party_pct - a.votes_with_party_pct
        });
    }


    //strip values to needed
    return res.map(a => {
        return [a.first_name + ' , ' + a.last_name, (a.total_votes * a.votes_with_party_pct / 100).toFixed(2), a.votes_with_party_pct];
    })

}

function getAttendanceList(fullList, leastMost) {
    var res;
    var percentage = Math.round(10 * fullList.length / 100);
    var list = fullList.sort((a, b) => {
        return a.missed_votes_pct - b.missed_votes_pct
    });
    var limitLeast = list[percentage - 1];
    var limitMost = list[list.length - percentage];

    //get least and most
    if (leastMost == 'least') {
        var res = list.filter(a => a.missed_votes_pct <= limitLeast.missed_votes_pct);
    } else {
        var list2 = list.filter(a => a.missed_votes_pct >= limitMost.missed_votes_pct);
        res = list2.sort((a, b) => {
            return b.missed_votes_pct - a.missed_votes_pct
        });
    }

    //strip values to needed
    return res.map(a => {
        return [a.first_name + ' , ' + a.last_name, a.missed_votes, a.missed_votes_pct];
    })

}

function buidStatistic(fetchedList) {

    var statistics = {
        "number": [{
            "republicans": getListsLenght(fetchedList, 'R'),
            "democrats": getListsLenght(fetchedList, 'D'),
            "independants": getListsLenght(fetchedList, 'I')
        }, ],
        "partyForVote": [{
            "republicans": getAvVoteforParty(fetchedList, 'R'),
            "democrats": getAvVoteforParty(fetchedList, 'D'),
            "independants": getAvVoteforParty(fetchedList, 'I')
        }, ],
        "attendanceVote": [{
            "missedLeast": getAttendanceList(fetchedList, 'least'),
            "missedMost": getAttendanceList(fetchedList, 'most'),

        }],
        "partyLoyalty": [{
            "leastLoyal": getLoyaltyList(fetchedList, 'least'),
            "mostLoyal": getLoyaltyList(fetchedList, 'most'),
        }]

    }
    return statistics;
}