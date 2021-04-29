function extractRegion(locale) {
  let excludeLanguage = locale.split('_')[1];
  let region = excludeLanguage.split('.')[0]
  console.log(region);
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'