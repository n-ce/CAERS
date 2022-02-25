let show = (name) => {
  if (name != 'qualifications') {
    const allList = ['tenthRailway', 'tenthBanking'];
    for (var i = 0; i < allList.length; i++) {
      document.getElementById(allList[i]).classList.add('is-hidden');
    }
  }
  document.getElementById(name).classList.toggle('is-hidden');
}