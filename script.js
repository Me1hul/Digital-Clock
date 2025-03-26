
        function updateClock() {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const period = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12;
            hours = hours ? hours : 12;

            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            const isoTime = now.toISOString();

            const clockDisplay = document.getElementById('clockDisplay');
            clockDisplay.innerHTML = `${formattedTime} <span class="period">${period}</span>`;
            clockDisplay.setAttribute('datetime', isoTime);
        }

        updateClock();
        setInterval(updateClock, 1000);
