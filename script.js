          fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=UCX1s6xSBP2hBdEJlNurOolQ&key=AIzaSyB9_39PuB599l_z5YyE2bEkQPKBPfeFRI0')
          // kita buat response menjadi json
          .then((response) => response.json())
          // lalu data nya kita ambil dan kita masuken ke p id output
          .then((data) => {
            // kita buat variabel output 
            let output = '';
            // mendefinisikan variabel dan mengisi data dari api yang diiginkan
            const profilePicture = data.items[0].snippet.thumbnails.medium.url;
            const channelName = data.items[0].snippet.title;
            const subscribeCount = data.items[0].statistics.subscriberCount;
            const viewCount = data.items[0].statistics.viewCount;
            const descriptionChannel = data.items[0].snippet.description;
            const videoCount = data.items[0].statistics.videoCount;
            // output untuk menampilkan profile card
              output += `
              <div class="profile-card js-profile-card">
                  <div class="profile-card__img">
                    <img src="${profilePicture}" alt="profile card">
                  </div>
              
                  <div class="profile-card__cnt js-profile-cnt">
                    <div class="profile-card__name">${channelName}</div>
                    <div class="profile-card__txt">Ewooo... OwO Aku Lewin Algar Vtuber asal Indonesia, btw aku ini ras serigala loh bukan kucing  tapi sesekali bisa berubah jadi ras naga kok /heh</strong></div>
                    <div class="profile-card-loc">
                      <span class="profile-card-loc__icon">
                        <svg class="icon"><use xlink:href="#icon-location"></use></svg>
                      </span>
              
                      <span class="profile-card-loc__txt">
                        Jakarta, Indonesia
                      </span>
                    </div>
              
                    <div class="profile-card-inf" id="id">
                      <div class="profile-card-inf__item">
                        <div class="profile-card-inf__title">${subscribeCount}</div>
                        <div class="profile-card-inf__txt">Subscriber</div>
                      </div>
              
                      <div class="profile-card-inf__item">
                        <div class="profile-card-inf__title">${videoCount}</div>
                        <div class="profile-card-inf__txt">Video</div>
                      </div>
              
                      <div class="profile-card-inf__item">
                        <div class="profile-card-inf__title">${viewCount}</div>
                        <div class="profile-card-inf__txt">Views</div>
                      </div>
                    </div>
              
                    <div class="profile-card-social">
                      <a href="#" class="profile-card-social__item facebook" target="_blank">
                        <span class="icon-font">
                            <svg class="icon"><use xlink:href="#icon-facebook"></use></svg>
                        </span>
                      </a>
              
                      <a href="#" class="profile-card-social__item twitter" target="_blank">
                        <span class="icon-font">
                            <svg class="icon"><use xlink:href="#icon-twitter"></use></svg>
                        </span>
                      </a>
              
                      <a href="#" class="profile-card-social__item instagram" target="_blank">
                        <span class="icon-font">
                            <svg class="icon"><use xlink:href="#icon-instagram"></use></svg>
                        </span>
                      </a>
              
                      <a href="https://www.youtube.com/c/LewinAlgarCh" class="profile-card-social__item link" target="_blank">
                        <span class="icon-font">
                            <svg class="icon"><use xlink:href="#icon-youtube"></use></svg>
                        </span>
                      </a>
              
                    </div>
              
                    <div class="profile-card-ctr">
                      <a href="https://saweria.co/LewinAlgar" target="_blank" class="profile-card__button button--blue js-message-btn">Saweria</a>
                      <a href="https://sociabuzz.com/lewinalgar" target="_blank" class="profile-card__button button--orange">SociaBuzz</a>
                    </div>
                  </div>
              
                  
              </div>`;
            //})
            // kita panggil id output agar bisa di tampilkan ke browser saat di klik
            document.getElementById('output').innerHTML = output;
          })
          // membuat catch jadi kalau ada yang error langsung ketawan
          .catch((err) => console.log(err));


          