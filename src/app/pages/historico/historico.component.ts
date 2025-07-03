import { Component, HostListener, ElementRef, ViewChild,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historico',
  imports: [CommonModule],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.css'
})
export class HistoricoComponent {

 equipamentos = [
 {
   id: 1,
   data: "2024-01-15",
   pessoa: "João Silva",
   estado: "Em uso",
   motivo: "Novo funcionário - setup inicial",
   observacoes: "Item retirado do estoque para uso em home office"
 },
 {
   id: 2,
   data: "2024-02-20",
   pessoa: "Maria Santos", 
   estado: "Em uso",
   motivo: "Transferência interna",
   observacoes: "João foi realocado para outro projeto, Maria assumiu a função"
 },
 {
   id: 3,
   data: "2024-03-10",
   pessoa: "Técnico TI",
   estado: "Em manutenção",
   motivo: "Manutenção preventiva",
   observacoes: "Atualização de sistema e limpeza - prazo estimado 3 dias"
 },
 {
   id: 4,
   data: "2024-03-13",
   pessoa: "Maria Santos",
   estado: "Em uso", 
   motivo: "Retorno da manutenção",
   observacoes: "Sistema atualizado, SSD substituído, funcionando perfeitamente"
 },
 {
   id: 5,
   data: "2024-04-05",
   pessoa: "Carlos Oliveira",
   estado: "Em uso",
   motivo: "Transferência por demissão",
   observacoes: "Maria Santos desligada da empresa, equipamento transferido para Carlos"
 },
 {
   id: 6,
   data: "2024-05-15",
   pessoa: "Almoxarifado TI",
   estado: "Disponível",
   motivo: "Devolução voluntária",
   observacoes: "Carlos optou por usar equipamento pessoal, item retornado ao estoque"
 },
 {
   id: 7,
   data: "2024-03-13",
   pessoa: "Maria Santos",
   estado: "Em uso", 
   motivo: "Retorno da manutenção",
   observacoes: "Sistema atualizado, SSD substituído, funcionando perfeitamente"
 },
 {
   id: 8,
   data: "2024-04-05",
   pessoa: "Carlos Oliveira",
   estado: "Em uso",
   motivo: "Transferência por demissão",
   observacoes: "Maria Santos desligada da empresa, equipamento transferido para Carlos"
 },
 {
   id: 9,
   data: "2024-05-15",
   pessoa: "Almoxarifado TI",
   estado: "Disponível",
   motivo: "Devolução voluntária",
   observacoes: "Carlos optou por usar equipamento pessoal, item retornado ao estoque"
 },
 {
   id: 10,
   data: "2024-03-13",
   pessoa: "Maria Santos",
   estado: "Em uso", 
   motivo: "Retorno da manutenção",
   observacoes: "Sistema atualizado, SSD substituído, funcionando perfeitamente"
 },
 {
   id: 11,
   data: "2024-04-05",
   pessoa: "Carlos Oliveira",
   estado: "Em uso",
   motivo: "Transferência por demissão",
   observacoes: "Maria Santos desligada da empresa, equipamento transferido para Carlos"
 },
 {
   id: 12,
   data: "2024-05-15",
   pessoa: "Almoxarifado TI",
   estado: "Disponível",
   motivo: "Devolução voluntária",
   observacoes: "Carlos optou por usar equipamento pessoal, item retornado ao estoque"
 },
 {
   id: 13,
   data: "2024-03-13",
   pessoa: "Maria Santos",
   estado: "Em uso", 
   motivo: "Retorno da manutenção",
   observacoes: "Sistema atualizado, SSD substituído, funcionando perfeitamente"
 },
 {
   id: 14,
   data: "2024-04-05",
   pessoa: "Carlos Oliveira",
   estado: "Em uso",
   motivo: "Transferência por demissão",
   observacoes: "Maria Santos desligada da empresa, equipamento transferido para Carlos"
 },
 {
   id: 15,
   data: "2024-05-15",
   pessoa: "Almoxarifado TI",
   estado: "Disponível",
   motivo: "Devolução voluntária",
   observacoes: "Carlos optou por usar equipamento pessoal, item retornado ao estoque"
 }
];
  itemsPerPage = 5; 
  currentPage = 1;  
  currentPageItems: any[] = []; 
  totalPages = 0; 
  overlay = false;
  modalAdd= false;

   sectors = [
    { id: 'historico', name: 'Historico', icon: '📦', color: '#6c757d' },
    { id: 'informações', name: 'Informações', icon: '💻', color: '#007bff' },
  ];
  
  currentSector = 'historico'; 
  
    // Trocar de setor
  switchSector(sectorId: string): void {
    if (sectorId !== this.currentSector) {
      this.currentSector = sectorId;
      this.currentPage = 1; // Voltar para primeira página
      
      console.log('Setor alterado para:', sectorId);
    }
  }

  ngOnInit(): void {
    this.calculatePagination();
    this.updateCurrentPage();
  }

  // Calcular total de páginas
  calculatePagination(): void {
    this.totalPages = Math.ceil(this.equipamentos.length / this.itemsPerPage);
  }

  // Atualizar itens da página atual
  updateCurrentPage(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.currentPageItems = this.equipamentos.slice(startIndex, endIndex);
  }

    // Ir para próxima página
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateCurrentPage();
    }
  }

  // Ir para página anterior
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateCurrentPage();
    }
  }
  expandirSubTablea(i: number){
    let element = document.querySelector('.teste-'+ i) as HTMLElement
    if(element.style.display != 'none'){
      element.style.display = 'none';
      console.log(element.style.display)
      return
    }
    element.style.display = 'contents'
  }
  expandirModalAdd(){
    this.modalAdd = !this.modalAdd
    this.overlay = !this.overlay
  }
}
