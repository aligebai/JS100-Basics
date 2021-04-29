function extractLanguage(locale) {
  const language = locale.split('_');
  console.log(language[0]);
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16');