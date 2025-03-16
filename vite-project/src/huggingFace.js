import { prevUser } from "./Context/UserContext";

export async function query() {
	const response = await fetch(
		"https://router.huggingface.co/hf-inference/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_ENVIRONMENT}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs": prevUser.prompt}),
		}
	);
	const result = await response.blob();
	return result;
}
