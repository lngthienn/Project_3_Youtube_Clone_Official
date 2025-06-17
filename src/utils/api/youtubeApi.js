// import apiClient from './apiClient';

export const fetchSuggestions = async (query) => {
    const response = await fetch(`/api/suggest?q=${encodeURIComponent(query)}&hl=vi&gl=VN&geo=VN`);

    if (!response.ok) throw new Error(`API lỗi: ${response.status}`);

    const textData = await response.text();
    console.log('Raw API response:', textData);

    const jsonMatch = textData.match(/\[(.*)\]/);
    if (!jsonMatch) throw new Error('Không tìm thấy dữ liệu JSON');

    const jsonString = jsonMatch[0];
    const data = JSON.parse(jsonString);

    return Array.isArray(data[1])
        ? data[1].map((item) => item[0]).filter((suggestion) => suggestion && suggestion.toLowerCase() !== 'q')
        : [];
};
