function setClock() {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0')

  const clock = `${hours}:${minutes}:${seconds}`
  document.getElementById('clock').textContent = clock
}

function currentDate() {
  const now = new Date()
  const day = now.getDay() + 1
  const year = now.getFullYear()
  let month = now.getMonth() + 1

  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ]

  switch (month) {
    case 1:
      month = months[0]
      break

    case 2:
      month = months[1]
      break

    case 3:
      month = months[2]
      break

    case 4:
      month = months[3]
      break

    case 5:
      month = months[4]
      break

    case 6:
      month = months[5]
      break

    case 7:
      month = months[6]
      break

    case 8:
      month = months[7]
      break

    case 9:
      month = months[8]
      break

    case 10:
      month = months[9]
      break

    case 11:
      month = months[10]
      break

    case 12:
      month = months[11]
      break
  }

  const date = `${day} de ${month} de ${year}`
  document.getElementById('date').textContent = date
}

setInterval(setClock, 1000)
setClock()
currentDate()
