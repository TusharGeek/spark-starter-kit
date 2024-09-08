import React, { useState } from "react";
import { Box, Image, Title, Flex, Badge, Button, Notification, Text, Loader } from "@mantine/core";
import { Product } from "../pages/Cart";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [aiResponse, setAiResponse] = useState<string | null>(null); 
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // State to manage loading

  const handleAiQuery = async () => {
    console.log(product.name);

    const apiUrl = `https://bamboo-basis-434518-f9.de.r.appspot.com/generate?product_id=WHAT%20IS%20${encodeURIComponent(product.name)}`;
  
    setLoading(true); // Start the loader when the API call begins

    try {
      const response = await fetch(apiUrl, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json", 
        },
      });
  
      // Check if the response status is OK (200) before trying to parse it
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parse the response as JSON
      const data = await response.json();
      console.log(data);
      
      // Set the AI response message
      setAiResponse(data?.result || "No response from AI");
    } catch (err) {
      console.error("Error fetching AI response:", err);
      setError("Error fetching AI response");
    } finally {
      setLoading(false); // Stop the loader when the API call is finished
    }
  };

  return (
    <Box
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        backgroundColor: "white",
        borderColor: "#ddd",
      }}
      mt={16}
    >
      <Flex align="center" gap={16}>
        <Image
          src={product.imageURL}
          alt={product.name}
          width={100}
          height={100}
          radius="md"
        />
        <Box>
          <Title order={4}>{product.name}</Title>
          <Flex align="center" gap={8} mt={8}>
            <Badge color="blue">{product.price} USD</Badge>
            <Badge color="green">Qty: {product.quantity}</Badge>
          </Flex>
        </Box>
      </Flex>

      {/* AI Query Button with Loading */}
      <Button mt={16} onClick={handleAiQuery} loading={loading}>
        {loading ? "Fetching AI Response..." : `Ask AI About ${product.name}`}
      </Button>

      {/* AI Response Notification */}
      {aiResponse && (
        <Notification mt={16} color="green" onClose={() => setAiResponse(null)}>
          AI Response: {aiResponse}
        </Notification>
      )}

      {/* Error Notification */}
      {error && (
        <Notification mt={16} color="red" onClose={() => setError(null)}>
          {error}
        </Notification>
      )}
    </Box>
  );
};

export default ProductCard;
