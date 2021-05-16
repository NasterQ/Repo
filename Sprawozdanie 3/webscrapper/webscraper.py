import requests
from bs4 import BeautifulSoup


def findTeams(soup, team_i):
    className = "team-" + str(team_i)
    tList = []
    teams = soup.find_all("span", class_=className)
    for team in teams:
        teamE = team.text.strip()
        tList.append(teamE)
    return tList


def findNations(soup):
    className = "region"
    nList = []
    nations = soup.find_all("span", class_=className)
    for nation in nations:
        nationE = nation.find("span")['title']
        nList.append(nationE)
    return nList


def findMatches(soup):
    className = "cell match-tournament"
    mList = []
    matches = soup.find_all("div", class_="cell match-tournament")
    for match in matches:
        matchE = match.text.strip()
        mList.append(matchE)
    return mList


def findDates(soup):
    className = "cell small-3 medium-3 match-status"
    dList = []
    dates = soup.find_all("div", class_=className)
    for date in dates:
        dateE = date.find("span").text.strip()
        dList.append(dateE)
    return dList


def combine(t1, t2, n, m, d):
    matches = []
    t_i = 0
    for i in range(len(m)):
        team1 = str(t1[i]) + " from " + str(n[t_i])
        team2 = str(t2[i]) + " from " + str(n[t_i+1])
        t_i += 2
        mat = str(m[i])
        date = str(d[i])

        match = team1 + "\nvs.\n" + team2 + "\nOn tournament: " + mat + "\nOn day: " + date + "\n"

        matches.append(match)
    return matches


def display(mList):
    for match in mList:
        print(match)


result = requests.get("https://www.gosugamers.net/counterstrike/matches")
src = result.content
soup = BeautifulSoup(src, 'lxml')

teams1 = findTeams(soup, 1)  # returns teams list from the left side
teams2 = findTeams(soup, 2)  # returns teams list from the right side
nations = findNations(soup)  # returns nations of the playing teams
matches = findMatches(soup)  # returns ongoing/ upcoming matches
dates = findDates(soup)  # returns dates of matches

matchList = combine(teams1, teams2, nations, matches, dates)
# combines all gathered data into the list of seperate entries

display(matchList)  # display all entries
