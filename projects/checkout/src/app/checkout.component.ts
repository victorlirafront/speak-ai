import { Component } from '@angular/core';

@Component({
  selector: 'checkout-root',
  standalone: true,
  template: `
    <div class="checkout-container">
      <h1>Finalizar Compra</h1>

      <div class="checkout-content">
        <div class="order-summary">
          <h2>Resumo do Pedido</h2>
          <div class="order-items">
            <div class="order-item" *ngFor="let item of orderItems">
              <span>{{ item.name }} x{{ item.quantity }}</span>
              <span>R$ {{ item.price * item.quantity }}</span>
            </div>
          </div>
          <div class="order-total">
            <strong>Total: R$ {{ total }}</strong>
          </div>
        </div>

        <div class="checkout-form">
          <h2>Informações de Entrega</h2>
          <form>
            <div class="form-group">
              <label>Nome Completo</label>
              <input type="text" placeholder="Digite seu nome completo">
            </div>

            <div class="form-group">
              <label>Email</label>
              <input type="email" placeholder="Digite seu email">
            </div>

            <div class="form-group">
              <label>Telefone</label>
              <input type="tel" placeholder="Digite seu telefone">
            </div>

            <div class="form-group">
              <label>Endereço</label>
              <input type="text" placeholder="Digite seu endereço">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Cidade</label>
                <input type="text" placeholder="Cidade">
              </div>
              <div class="form-group">
                <label>Estado</label>
                <input type="text" placeholder="Estado">
              </div>
              <div class="form-group">
                <label>CEP</label>
                <input type="text" placeholder="CEP">
              </div>
            </div>

            <h2>Forma de Pagamento</h2>
            <div class="payment-methods">
              <label class="payment-option">
                <input type="radio" name="payment" value="credit">
                Cartão de Crédito
              </label>
              <label class="payment-option">
                <input type="radio" name="payment" value="pix">
                PIX
              </label>
              <label class="payment-option">
                <input type="radio" name="payment" value="boleto">
                Boleto
              </label>
            </div>

            <button type="submit" class="confirm-order">Confirmar Pedido</button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .checkout-container {
      padding: 20px;
    }

    .checkout-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 40px;
      margin-top: 20px;
    }

    .order-summary {
      background-color: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      height: fit-content;
    }

    .order-items {
      margin: 20px 0;
    }

    .order-item {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #ddd;
    }

    .order-total {
      border-top: 2px solid #ddd;
      padding-top: 15px;
      margin-top: 15px;
      text-align: right;
    }

    .checkout-form {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #ddd;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    .form-group input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 15px;
    }

    .payment-methods {
      margin: 20px 0;
    }

    .payment-option {
      display: block;
      margin: 10px 0;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
    }

    .payment-option:hover {
      background-color: #f8f9fa;
    }

    .confirm-order {
      background-color: #27ae60;
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1.1rem;
      width: 100%;
      margin-top: 20px;
    }

    .confirm-order:hover {
      background-color: #229954;
    }
  `]
})
export class CheckoutComponent {
  orderItems = [
    { id: 1, name: 'Produto 1', price: 99.99, quantity: 2 },
    { id: 2, name: 'Produto 2', price: 149.99, quantity: 1 }
  ];

  get total(): number {
    return this.orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}
