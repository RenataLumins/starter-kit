interface SingersType {
	country?: string;
	name: string;
	unavailable?: boolean
}

export const Singers: SingersType[] = [
	{country: 'Barbados', name: 'Rihanna', unavailable: false},
	{country: 'USA', name: 'Arianna Grande', unavailable: false},
	{country: 'Albania', name: 'Rita Ora', unavailable: false},
	{country: 'USA', name: 'Lady Gaga', unavailable: true},
	{country: 'USA', name: 'Selena Gomez', unavailable: false},
	{country: 'Albania', name: 'Dua Lipa', unavailable: false},
	{country: 'USA', name: 'Taylor Swift', unavailable: false},
	{country: 'Thailand', name: 'Lisa', unavailable: false},
	{country: 'South Korea', name: 'Rose', unavailable: false},
	{country: 'Russia', name: 'Asammuell', unavailable: false},
	{country: 'Russia', name: 'Mary Gu', unavailable: false},
	{country: 'USA', name: 'Halsey', unavailable: false},
	{country: 'Russia', name: 'Anna Asti', unavailable: false},
	{country: 'South Korea', name: 'Taeyeon', unavailable: false},
	{country: 'South Korea', name: 'Sunmi', unavailable: false},
	{country: 'UK', name: 'Charli XCX', unavailable: false},
	{country: 'Denmark', name: 'Agnes', unavailable: false},
	{country: 'USA', name: 'Beyonce', unavailable: false},
	{country: 'USA', name: 'Katy Perry', unavailable: false},
	{country: 'USA', name: 'Lana Del Rey', unavailable: false},
]