import React, { Component} from "react";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

export default class LazyComponent extends Component{

    constructor(props) {
        super(props);
        this.state = { todo: {} , loaded : false , isError:false};   
    }   

    fetchTodo = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            if(response.status !== 200){
                this.setState({ todo: {} , loaded:true , isError : 'Error in API response' }); 
            }
            else{
                const data = await response.json();
                this.setState({ todo: data , loaded:true, isError: false }); 
            }
        }
        catch (error) {
            this.setState({ todo: {} , loaded:true , isError : error.message }); 
        }
      };

      componentDidMount() {
        setTimeout(() => {
            this.fetchTodo() 
        } , 2000); // to test suspense
    } 
    
    render() {
        return (
            <Container className='pt-3'>
                <Alert key="secondary" variant="secondary">
                    {!this.state.loaded && <p> Fetching via API.. Please Wait</p>}
                    {this.state.loaded && this.state.isError && <p> {this.state.isError} </p>}
                    {this.state.loaded && !this.state.isError && <p> TODO:{this.state.todo.title} </p>}
                </Alert>                
            </Container>
        );
        }
}