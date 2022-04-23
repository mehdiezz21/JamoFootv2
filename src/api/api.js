import FootballData from 'footballdata-api-v2';
const footballData = new FootballData('c78a3e54547d450e89fcf7cb4333523f');

export const myApi = {
    fetchCompetitions: ( id ) => footballData.getCompetitions({ areas: id }).then((data) =>
        data.competitions),

    fetchCompetitionsId: (id) => footballData.getCompetition({ id }).then((data) =>
        (data)),

    getTeamsFromCompetition: (id) => footballData.getTeamsFromCompetition({ competitionId: id }).then((data) =>
        (data)),

    getStandingsFromCompetition: (id) => footballData.getStandingsFromCompetition({
        competitionId: id,
    }).then((data) =>
        data),

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

    getMatchesFromTeam: (id) => footballData.getMatchesFromTeam({
        teamId: id,
    }).then((data) =>
        data),
    // 
    getTeam: (id) => footballData.getTeam({
        id: id,
    }).then((data) => data),

    getTeamTest: () => footballData.getTeam().then((data) => data),

    getAreas: () => footballData.getAreas().then((data) =>
        JSON.stringify(data)),

    getArea: (id) => footballData.getArea({
        id
    }).then((data) =>
        JSON.stringify(data)),

    getPlayer: (id) => footballData.getPlayer({
        id,
    }).then((data) =>
        data),
           
    getMatchesFromPlayer: (id) => footballData.getMatchesFromPlayer({
        playerId: id,
    }).then((data) =>
        data),                                
    };
