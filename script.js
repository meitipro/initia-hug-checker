function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const activeSection = document.getElementById(sectionId);
  activeSection.classList.add('active');
}

function connectDiscord() {
  const clientId = '1338468977130602526';  // Client ID شما
  const redirectUri = 'https://x.com/MaeezyyyPRMR';  // URL بازگشتی شما
  const scope = 'identify guilds guilds.members.read';  // دسترسی‌های مورد نیاز
  const url = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}`;

  // هدایت کاربر به دیسکورد
  window.location.href = url;
}

// بعد از اینکه کاربر وارد دیسکورد شد، کد authorization را از URL می‌گیریم و توکن دسترسی را دریافت می‌کنیم.
function getAccessToken(code) {
  const clientId = '1338468977130602526';
  const clientSecret = 'fCWCwaZYP_BigjKZQXfLWj4n9iz1hYDt';  // Client Secret شما
  const redirectUri = 'https://x.com/MaeezyyyPRMR';

  const url = 'https://discord.com/api/v10/oauth2/token';
  const data = {
    client_id: clientId,
    client_secret: clientSecret,
    code: code,
    grant_type: 'authorization_code',
    redirect_uri: redirectUri
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(data)
  })
  .then(response => response.json())
  .then(data => {
    const accessToken = data.access_token;
    console.log("Access Token: ", accessToken);

    // پس از دریافت توکن، می‌توانید اطلاعات کاربر را از Discord API دریافت کنید.
    getUserInfo(accessToken);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function getUserInfo(accessToken) {
  fetch('https://discord.com/api/v10/users/@me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('User Info:', data);
    // می‌توانید اطلاعات کاربر را در صفحه نمایش دهید
  })
  .catch(error => {
    console.error('Error fetching user info:', error);
  });
}
