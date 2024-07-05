import  { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container, Typography } from "@mui/material";


interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const SecondPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          setErrorMessage("Error fetching data");
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, []);

    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 90 },
      { field: "title", headerName: "Title", width: 200 },
      { field: "body", headerName: "Body", width: 400 },
      { field: "userId", headerName: "User ID", width: 90 },
    ];

    return (
      <div>
        <div>
          <Container maxWidth="md">
            <Typography
              variant="h4"
              align="center"
              component="h1"
              content="center"
              gutterBottom
            >
              All Posts Data
            </Typography>
            {isLoading && <p>Loading data...</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid rows={posts} columns={columns} />
            </div>
          </Container>
        </div>
      </div>
    );
};

export default SecondPage;