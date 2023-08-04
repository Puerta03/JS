function CONE(){
    const pi = 3.14
    let raioCONE = Number(prompt("Qual o valor do raio da base do cone?"))
    let alturaCONE = Number(prompt("Qual o valor da altura do cone?"))
    let valorCONE = ((pi*(raioCONE*raioCONE))*alturaCONE)/3
    alert(`o valor do volume do cone é de ${valorCONE} m³`)
    textoCone = document.querySelector('h2#cone')
    textoCone.textContent = `O valor do volume do cone é de ${valorCONE} m³`
}
function PIRAMIDE(){
    let ladoPIRAMIDE = Number(prompt("Qual o valor do lado da base da piramide?"))
    let alturaPIRAMIDE = Number(prompt("Qual o valor da altura da piramide?"))
    let valorPIRAMIDE = ((ladoPIRAMIDE*ladoPIRAMIDE)*alturaPIRAMIDE)/3
    alert(`o valor do volume da piramide é de ${valorPIRAMIDE} m³`)
    textoCone = document.querySelector('h2#piramide')
    textoCone.textContent = `O valor do volume da piramide é de ${valorPIRAMIDE} m³`
}
function PARALELEPIPEDO(){
    let compPARALELEPIPEDO = Number(prompt("Qual o valor do comprimento do paralelepípedo?"))
    let largPARALELEPIPEDO = Number(prompt("Qual o valor da largura do paralelepípedo?"))
    let alturaPARALELEPIPEDO = Number(prompt("Qual o valor da altura do paralelepípedo?"))
    let valorPARALELEPIPEDO = ((compPARALELEPIPEDO*largPARALELEPIPEDO)*alturaPARALELEPIPEDO)
    alert(`o valor do volume da paralelepípedo é de ${valorPARALELEPIPEDO} m³`)
    textoCone = document.querySelector('h2#paralelepípedo')
    textoCone.textContent = `O valor do volume da paralelepípedo é de ${valorPARALELEPIPEDO} m³`
}
function CILINDRO(){
    const pi = 3.14
    let raioCILINDRO = Number(prompt("Qual o valor do raio da base do cilindro?"))
    let alturaCILINDRO = Number(prompt("Qual o valor da altura do cilindro?"))
    let valorCILINDRO = ((pi*(raioCILINDRO*raioCILINDRO))*alturaCILINDRO)
    alert(`o valor do volume do cilindro é de ${valorCILINDRO} m³`)
    textoCone = document.querySelector('h2#cilindro')
    textoCone.textContent = `O valor do volume do cilindro é de ${valorCILINDRO} m³`
}
function ESFERA(){
    const pi = 3.14
    let raioESFERA = Number(prompt("Qual o valor do raio da esfera?"))
    let valorESFERA = (4*pi*(raioESFERA*raioESFERA*raioESFERA))/3
    alert(`o valor do volume da esfera é de ${valorESFERA} m³`)
    textoCone = document.querySelector('h2#esfera')
    textoCone.textContent = `O valor do volume do esfera é de ${valorESFERA} m³`
}
function PRISMA(){
    let ladoPRISMA = Number(prompt("Qual o valor do lado da base da prisma?"))
    let alturaPRISMA = Number(prompt("Qual o valor da altura da prisma?"))
    let valorPRISMA = ((ladoPRISMA*ladoPRISMA)*alturaPRISMA)/3
    alert(`o valor do volume da prisma é de ${valorPRISMA} m³`)
    textoCone = document.querySelector('h2#prisma')
    textoCone.textContent = `O valor do volume da prisma é de ${valorPRISMA} m³`
}