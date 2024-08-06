const pertanyaan  = document.getElementById("pertanyaan")
const jawaban  = document.getElementById("jawaban")

let init = 0

const  botSay = (data) => {
	return [
	"Hai, saya Bot AI. Kamu siapa?",
	`Halo ${data?.nama}, berapa usia kamu?`,
	`Ouhhh ${data?.usia}, Kalo boleh tau hobi kamu apa ya?`,
	`Ternyata kita punya hobi yang sama ${data?.hobi},oiya kamu udah punya pacar?`,
	`heemm ${data?.pacar} yaudah dehhh, udah dulu yaaaa`,	
	]
}
pertanyaan.innerHTML = botSay()[0]
 let usersData = []
function botStart () {
	init++
	if(init === 1){
	botDelay ({nama: jawaban.value})
	}
	else if (init === 2){
	botDelay ({usia: jawaban.value})
	}
	else if (init === 3){
	botDelay ({hobi: jawaban.value})
	}
	else if (init === 4){
	botDelay ({pacar: jawaban.value})
	}
	else if (init === 5){
		finishing()
	}
	else{
		botEnd()
	}
}

function botDelay (jawabanUser) {
	setTimeout(() => {
pertanyaan.innerHTML = botSay(jawabanUser)[init]
	}, [1250])
	usersData.push(jawaban.value)
	jawaban.value = ""
}
function finishing() {
	console.log({usersData: usersData})
	pertanyaan.innerHTML = `Thanks ya ${usersData[0]} udah main Bot ini, kali-kali kita main ${usersData[2]} bareng ya!`
	jawaban.value = "siap thanks juga!"
	
}
function botEnd() {
	window.location.reload()
}