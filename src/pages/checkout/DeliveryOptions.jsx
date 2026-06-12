import { formatMoney } from '../../utils/money';
import dayjs from 'dayjs';

export function DeliveryOptions({ delivaryOptions, item}) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {delivaryOptions.map((deliveryOption) => {
                let price = 'FREE SHIPPING';
                if (deliveryOption.priceCents > 0) {
                    price = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
                }

                return (
                    <div key={deliveryOption.id} className="delivery-option">
                        <input type="radio"
                            checked={deliveryOption.id === item.deliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-${item.productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {price}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}