import { Component, HostListener, ElementRef, ViewChild,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule,],
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.css'
})
export class ItensComponent implements OnInit {
  
  equipments: any[] = [
    { name: "Teclado Mecânico RGB", id: "#KB267400", stock: "45 unid", type: "Periférico", status: "maintenance", statusText: "Manutenção", icon: "⌨️", iconBg: "#e3f2fd" },
    { name: "Monitor 24\" Full HD", id: "#MN651535", stock: "23 unid", type: "Monitor", status: "maintenance", statusText: "Manutenção", icon: "🖥️", iconBg: "#f3e5f5" },
    { name: "Mouse Gamer Wireless", id: "#MS851535", stock: "67 unid", type: "Periférico", status: "pending", statusText: "Pendente", icon: "🖱️", iconBg: "#fff3e0" },
    { name: "Notebook Dell Inspiron", id: "#NB651535", stock: "12 unid", type: "Computador", status: "maintenance", statusText: "Manutenção", icon: "💻", iconBg: "#e8f5e8" },
    { name: "Headset Gamer", id: "#HS487441", stock: "34 unid", type: "Audio", status: "maintenance", statusText: "Manutenção", icon: "🎧", iconBg: "#fce4ec" },
    { name: "SSD 1TB NVMe", id: "#SS449003", stock: "89 unid", type: "Armazenamento", status: "maintenance", statusText: "Manutenção", icon: "💾", iconBg: "#fff8e1" },
    { name: "Placa de Vídeo RTX", id: "#VG651535", stock: "8 unid", type: "Componente", status: "inactive", statusText: "Inativo", icon: "🎮", iconBg: "#e1f5fe" },
    { name: "Memória RAM 16GB", id: "#RM449003", stock: "156 unid", type: "Componente", status: "maintenance", statusText: "Manutenção", icon: "🧠", iconBg: "#f1f8e9" },
    { name: "Fonte 650W Modular", id: "#PS332211", stock: "28 unid", type: "Componente", status: "inactive", statusText: "Inativo", icon: "🔌", iconBg: "#ffebee" },
    { name: "Webcam Full HD", id: "#WC778899", stock: "41 unid", type: "Periférico", status: "maintenance", statusText: "Manutenção", icon: "📹", iconBg: "#e8eaf6" },
    { name: "Roteador Wi-Fi 6", id: "#RT556677", stock: "19 unid", type: "Rede", status: "pending", statusText: "Pendente", icon: "📡", iconBg: "#fff3e0" },
    { name: "Impressora Multifuncional", id: "#PR445566", stock: "7 unid", type: "Impressora", status: "maintenance", statusText: "Manutenção", icon: "🖨️", iconBg: "#fce4ec" },
    { name: "Gabinete Gamer RGB", id: "#GB123789", stock: "15 unid", type: "Gabinete", status: "maintenance", statusText: "Manutenção", icon: "🏠", iconBg: "#e8f5e8" },
    { name: "Cooler CPU Líquido", id: "#CL987654", stock: "22 unid", type: "Refrigeração", status: "inactive", statusText: "Inativo", icon: "❄️", iconBg: "#e1f5fe" },
    { name: "HD Externo 2TB", id: "#HE456123", stock: "68 unid", type: "Armazenamento", status: "maintenance", statusText: "Manutenção", icon: "💿", iconBg: "#fff8e1" },
    { name: "Tablet Samsung 10\"", id: "#TB789456", stock: "31 unid", type: "Tablet", status: "pending", statusText: "Pendente", icon: "📱", iconBg: "#f3e5f5" },
    { name: "Smartphone Xiaomi", id: "#SP654987", stock: "44 unid", type: "Smartphone", status: "maintenance", statusText: "Manutenção", icon: "📞", iconBg: "#e8eaf6" },
    { name: "Carregador Wireless", id: "#CW321654", stock: "77 unid", type: "Acessório", status: "maintenance", statusText: "Manutenção", icon: "🔋", iconBg: "#fff3e0" },
    { name: "Cabo HDMI 4K", id: "#CH987321", stock: "125 unid", type: "Cabo", status: "maintenance", statusText: "Manutenção", icon: "🔌", iconBg: "#e3f2fd" },
    { name: "Microfone Condensador", id: "#MC147258", stock: "18 unid", type: "Audio", status: "maintenance", statusText: "Manutenção", icon: "🎤", iconBg: "#fce4ec" },
    { name: "Memória RAM 16GB", id: "#RM449003", stock: "156 unid", type: "Componente", status: "maintenance", statusText: "Manutenção", icon: "🧠", iconBg: "#f1f8e9" },
    { name: "Fonte 650W Modular", id: "#PS332211", stock: "28 unid", type: "Componente", status: "inactive", statusText: "Inativo", icon: "🔌", iconBg: "#ffebee" },
    { name: "Webcam Full HD", id: "#WC778899", stock: "41 unid", type: "Periférico", status: "maintenance", statusText: "Manutenção", icon: "📹", iconBg: "#e8eaf6" },
    { name: "Roteador Wi-Fi 6", id: "#RT556677", stock: "19 unid", type: "Rede", status: "pending", statusText: "Pendente", icon: "📡", iconBg: "#fff3e0" },
    { name: "Impressora Multifuncional", id: "#PR445566", stock: "7 unid", type: "Impressora", status: "maintenance", statusText: "Manutenção", icon: "🖨️", iconBg: "#fce4ec" },
    { name: "Gabinete Gamer RGB", id: "#GB123789", stock: "15 unid", type: "Gabinete", status: "maintenance", statusText: "Manutenção", icon: "🏠", iconBg: "#e8f5e8" },
    { name: "Cooler CPU Líquido", id: "#CL987654", stock: "22 unid", type: "Refrigeração", status: "inactive", statusText: "Inativo", icon: "❄️", iconBg: "#e1f5fe" },
    { name: "HD Externo 2TB", id: "#HE456123", stock: "68 unid", type: "Armazenamento", status: "maintenance", statusText: "Manutenção", icon: "💿", iconBg: "#fff8e1" },
    { name: "Tablet Samsung 10\"", id: "#TB789456", stock: "31 unid", type: "Tablet", status: "pending", statusText: "Pendente", icon: "📱", iconBg: "#f3e5f5" },
    { name: "Smartphone Xiaomi", id: "#SP654987", stock: "44 unid", type: "Smartphone", status: "maintenance", statusText: "Manutenção", icon: "📞", iconBg: "#e8eaf6" },
    { name: "Carregador Wireless", id: "#CW321654", stock: "77 unid", type: "Acessório", status: "maintenance", statusText: "Manutenção", icon: "🔋", iconBg: "#fff3e0" },
    { name: "Cabo HDMI 4K", id: "#CH987321", stock: "125 unid", type: "Cabo", status: "maintenance", statusText: "Manutenção", icon: "🔌", iconBg: "#e3f2fd" },
    { name: "Microfone Condensador", id: "#MC147258", stock: "18 unid", type: "Audio", status: "maintenance", statusText: "Manutenção", icon: "🎤", iconBg: "#fce4ec" }
  ];

  sectorStocks: any = {
    ti: [
      { name: "Notebook Dell XPS", id: "#NB001", stock: "5 unid", type: "Computador", status: "active", statusText: "Ativo", icon: "💻", iconBg: "#e8f5e8" },
      { name: "Monitor 27\" 4K", id: "#MN002", stock: "8 unid", type: "Monitor", status: "active", statusText: "Ativo", icon: "🖥️", iconBg: "#f3e5f5" },
      { name: "Teclado Mecânico", id: "#KB003", stock: "12 unid", type: "Periférico", status: "active", statusText: "Ativo", icon: "⌨️", iconBg: "#e3f2fd" },
      { name: "Mouse Gamer", id: "#MS004", stock: "15 unid", type: "Periférico", status: "pending", statusText: "Pendente", icon: "🖱️", iconBg: "#fff3e0" },
      { name: "Headset Profissional", id: "#HS005", stock: "6 unid", type: "Audio", status: "active", statusText: "Ativo", icon: "🎧", iconBg: "#fce4ec" },
      { name: "SSD 1TB", id: "#SS006", stock: "20 unid", type: "Armazenamento", status: "active", statusText: "Ativo", icon: "💾", iconBg: "#fff8e1" },
      { name: "Roteador Enterprise", id: "#RT007", stock: "3 unid", type: "Rede", status: "maintenance", statusText: "Manutenção", icon: "📡", iconBg: "#fff3e0" }
    ],
    vendas: [
      { name: "Tablet Samsung", id: "#TB101", stock: "10 unid", type: "Tablet", status: "active", statusText: "Ativo", icon: "📱", iconBg: "#f3e5f5" },
      { name: "Smartphone iPhone", id: "#SP102", stock: "8 unid", type: "Smartphone", status: "active", statusText: "Ativo", icon: "📞", iconBg: "#e8eaf6" },
      { name: "Projetor Portátil", id: "#PJ103", stock: "4 unid", type: "Apresentação", status: "active", statusText: "Ativo", icon: "📽️", iconBg: "#fff8e1" },
      { name: "Câmera Webcam HD", id: "#WC104", stock: "12 unid", type: "Periférico", status: "on-sale", statusText: "Em Oferta", icon: "📹", iconBg: "#e8eaf6" },
      { name: "Carregador Wireless", id: "#CW105", stock: "25 unid", type: "Acessório", status: "active", statusText: "Ativo", icon: "🔋", iconBg: "#fff3e0" }
    ],
    rh: [
      { name: "Computador All-in-One", id: "#PC201", stock: "6 unid", type: "Computador", status: "active", statusText: "Ativo", icon: "🖥️", iconBg: "#e8f5e8" },
      { name: "Impressora Multifuncional", id: "#PR202", stock: "2 unid", type: "Impressora", status: "active", statusText: "Ativo", icon: "🖨️", iconBg: "#fce4ec" },
      { name: "Scanner de Documentos", id: "#SC203", stock: "3 unid", type: "Scanner", status: "inactive", statusText: "Inativo", icon: "📄", iconBg: "#ffebee" },
      { name: "Telefone IP", id: "#TL204", stock: "8 unid", type: "Telefonia", status: "active", statusText: "Ativo", icon: "☎️", iconBg: "#e3f2fd" }
    ],
    financeiro: [
      { name: "Calculadora Financeira", id: "#CF301", stock: "15 unid", type: "Calculadora", status: "active", statusText: "Ativo", icon: "🧮", iconBg: "#fff8e1" },
      { name: "Monitor Duplo 24\"", id: "#MD302", stock: "4 unid", type: "Monitor", status: "active", statusText: "Ativo", icon: "🖥️", iconBg: "#f3e5f5" },
      { name: "Leitor de Código", id: "#LC303", stock: "6 unid", type: "Scanner", status: "pending", statusText: "Pendente", icon: "📊", iconBg: "#fff3e0" },
      { name: "Backup Drive", id: "#BD304", stock: "10 unid", type: "Armazenamento", status: "active", statusText: "Ativo", icon: "💿", iconBg: "#fff8e1" }
    ],
    geral: [
      { name: "Estabilizador", id: "#ES401", stock: "20 unid", type: "Energia", status: "active", statusText: "Ativo", icon: "⚡", iconBg: "#fff8e1" },
      { name: "Cabo HDMI", id: "#CH402", stock: "50 unid", type: "Cabo", status: "active", statusText: "Ativo", icon: "🔌", iconBg: "#e3f2fd" },
      { name: "Extensão Elétrica", id: "#EE403", stock: "30 unid", type: "Energia", status: "active", statusText: "Ativo", icon: "🔌", iconBg: "#e3f2fd" },
      { name: "Suporte para Monitor", id: "#SM404", stock: "12 unid", type: "Acessório", status: "on-sale", statusText: "Em Oferta", icon: "🔧", iconBg: "#e1f5fe" }
    ]
  };

   sectors = [
    { id: 'geral', name: 'Geral', icon: '📦', color: '#6c757d' },
    { id: 'ti', name: 'TI', icon: '💻', color: '#007bff' },
    { id: 'vendas', name: 'Vendas', icon: '💼', color: '#28a745' },
    { id: 'rh', name: 'RH', icon: '👥', color: '#6f42c1' },
    { id: 'financeiro', name: 'Financeiro', icon: '💰', color: '#fd7e14' },
  ];
  
  currentSector = 'geral'; 
 
  itemsPerPage = 13; 
  currentPage = 1;  
  currentPageItems: any[] = []; 
  totalPages = 0;   
  openMenuIndex : number | null = null;
  openModal = false;
  openModalAdd = false;
  openModalExcluir = false;
  overlay = false;
  itemSelecionado: any = null;
  selectedItem: any = null;   


  ngOnInit(): void {
    this.calculatePagination();
    this.updateCurrentPage();
  }

  // Calcular total de páginas
  calculatePagination(): void {
    this.totalPages = Math.ceil(this.equipments.length / this.itemsPerPage);
  }

  // Atualizar itens da página atual
  updateCurrentPage(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.currentPageItems = this.equipments.slice(startIndex, endIndex);
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

  // Trocar de setor
  switchSector(sectorId: string): void {
    if (sectorId !== this.currentSector) {
      this.currentSector = sectorId;
      this.currentPage = 1; // Voltar para primeira página
      
      console.log('Setor alterado para:', sectorId);
    }
  }

  // Obter informações do setor atual
  getCurrentSector(): any {
    return this.sectors.find(sector => sector.id === this.currentSector);
  }

  // Obter nome do setor atual
  getSectorName(): string {
    const sector = this.getCurrentSector();
    return sector ? sector.name : 'Desconhecido';
  }

  // Contar itens por setor
  getSectorItemCount(sectorId: string): number {
    return this.sectorStocks[sectorId] ? this.sectorStocks[sectorId].length : 0;
  }

  // Obter cor do setor
  getSectorColor(sectorId: string): string {
    const sector = this.sectors.find(s => s.id === sectorId);
    return sector ? sector.color : '#6c757d';
  }


  openAcoes(index : number): void{
    this.openMenuIndex = this.openMenuIndex === index ? null : index;
  }

  abrirModal(item: any){
    this.openModal = !this.openModal
    this.overlay = !this.overlay
    this.itemSelecionado = item;
  }
  AbrirModaladd(){
    this.openModalAdd = !this.openModalAdd
    this.overlay = !this.overlay
  }
  abrirModalExcluir(){
    this.openModalExcluir = !this.openModalExcluir
    this.overlay = !this.overlay
  }

 @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    // Se não há menu aberto, não faz nada
    if (this.openMenuIndex === null) return;

    const target = event.target as HTMLElement;
    
    // Verifica se o clique foi em um elemento do menu ou botão de ação
    const isClickInsideMenu = target.closest('.action-btn-container');
    
    // Se não clicou no menu nem no botão, fecha o menu
    if (!isClickInsideMenu) {
      this.openMenuIndex = null;
    }
  }

}
