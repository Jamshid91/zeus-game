const filters = document.querySelectorAll('.filter-item li'),
      topPlayersCheck = document.querySelector('.top_players-check'),
      topPlayers = document.querySelector('.top_players'),
      teamLeaderboardCheck = document.querySelector('.team_leaderboard-check'),
      teamLeaderboard = document.querySelector('.team_leaderboard');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filter.parentElement.previousElementSibling.textContent = filter.textContent;
  });
});

topPlayersCheck.addEventListener('click', () => {
  topPlayersCheck.classList.add('checked');
  teamLeaderboardCheck.classList.remove('checked');
  topPlayers.classList.remove('d-none');
  teamLeaderboard.classList.add('d-none');
});

teamLeaderboardCheck.addEventListener('click', () => {
  topPlayersCheck.classList.remove('checked');
  teamLeaderboardCheck.classList.add('checked');
  topPlayers.classList.add('d-none');
  teamLeaderboard.classList.remove('d-none');
});