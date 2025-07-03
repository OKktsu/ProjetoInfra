import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
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

  itemsPerPage = 10; 
  currentPage = 1;  
  currentPageItems: any[] = []; 
  totalPages = 0;     


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

}