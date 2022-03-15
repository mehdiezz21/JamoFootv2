import FootballData from 'footballdata-api-v2';
const footballData = new FootballData('c78a3e54547d450e89fcf7cb4333523f');

export const myApi = {
    fetchCompetitions: ( id ) => footballData.getCompetitions({ areas: id }).then((data) =>
        data.competitions),

    fetchCompetitionsId: (id) => footballData.getCompetition({ id }).then((data) =>
        JSON.stringify(data)),

    getTeamsFromCompetition: (id) => footballData.getTeamsFromCompetition({ competitionId: id }).then((data) =>
        JSON.stringify(data)),

    getStandingsFromCompetition: (id, type) => footballData.getStandingsFromCompetition({
        competitionId: id,
        standingType: type,
    }).then((data) =>
        JSON.stringify(data)),

    getMatchesFromCompetition: (id, season, day) => footballData.getMatchesFromCompetition({
        competitionId: id,
        season,
        matchday: day,
    }).then((data) =>
        JSON.stringify(data)),

    getScorersFromCompetition: (id) => footballData.getScorersFromCompetition({
        competitionId: id,
    }).then((data) =>
        JSON.stringify(data)),

    getMatches: (id, dateFrom, dateTo) => footballData.getMatches({
        dateFrom: dateFrom,
        dateTo: dateTo,
        competitions: id,
    }).then((data) =>
        JSON.stringify(data)),

    getMatch: (id) => footballData.getMatch({
        id,
    }).then((data) =>
        JSON.stringify(data)),

    getMatchesFromTeam: (id, status) => footballData.getMatchesFromTeam({
        teamId: id,
        status: status,
    }).then((data) =>
        JSON.stringify(data)),
    
    getTeam: (id) => footballData.getTeam({
        id: id,
    }).then((data) =>
        JSON.stringify(data)),

    getAreas: () => footballData.getAreas().then((data) =>
        JSON.stringify(data)),

    getArea: (id) => footballData.getArea({
        id
    }).then((data) =>
        JSON.stringify(data)),

    getPlayer: (id) => footballData.getPlayer({
        id,
    }).then((data) =>
        JSON.stringify(data)),
           
    getMatchesFromPlayer: (id, dateFrom, dateTo, status) => footballData.getMatchesFromPlayer({
        playerId: id,
        dateFrom,
        dateTo: dateTo,
        status: status,
    }).then((data) =>
        JSON.stringify(data)),                                
    };
