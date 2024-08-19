import { BALANSE_URL } from "../../constants/api/api";

export const fetchJarBalance = async(callback) => {
try {
    const response = await fetch(BALANSE_URL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const {amount} = await response.json();
      const balance = Math.floor(amount / 100);
      callback(balance);

} catch (error) {
    console.error(`Помилка отримання даних: ${error.message}. Перевірте налаштування запитів.`);
    alert('Виникла помилка при отриманні даних. Спробуйте пізніше.');
}
}