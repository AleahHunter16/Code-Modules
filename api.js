const API_URL = 'https://api.thedogapi.com/v1/images/search';
const api_key = 'live_hsVfYYJTRYhHzOqPBSuCTWK7xlIpxJ5YVyorj28SygtMGTeJvEaYNm3VJwxE261H';

export const fetchTrucks = async () => {
    try {
        const response = await fetch(API_URL, {
            headers: {
                'x-api-key': api_key
            }
        });
        const data = await response.json();
        return data.map(dog => dog.url);
    } catch (error) {
        console.error('Error fetching trucks:', error);
    }
};