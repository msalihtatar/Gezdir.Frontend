import React, { useState } from 'react'
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';

type Props = { filter: string[]; setFilter: Function };
const Keywords = (props: Props) => {

    const [keyword, setKeyword] = useState(""); 

    // const handleChange = (val: number[]) => props.setFilter(val);

    //const handleChange = (index: number) => { props.filter[index] = !props.filter[index]; props.setFilter([...props.filter]); };
    return (
        <>
            <Card className='border-dark bg-light m-1' style={{maxWidth:'50rem'}}>
                <Card.Body>
                <InputGroup className="mb-3">
                    <FormControl type="text" value={keyword} 
                    onChange={(e)=>setKeyword(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            props.setFilter([...props.filter,keyword]);setKeyword("")
                        }
                    }}
                    className="form-control" placeholder="Add New Keyword" aria-label="Add New Keyword" aria-describedby="button-addon2"/>
                    <Button variant='outline-primary' type="button" id="button-addon2" onClick={()=>{props.setFilter([...props.filter,keyword]);setKeyword("")}}>Add Keyword</Button>
                </InputGroup>
                {props.filter.map((elem: string, i: number) => {
                    return (
                        <div key={i} className={`form-check small-chip bg-white text-dark ${props.filter[i] ? "selected-chip" : ""}`} >
                            <label className="form-check-label pe-2" id={"chip" + i}>
                                {elem}
                            </label>
                            <button type="button" className="btn-close fixed-right rounded-circle p-2 close-chip-dark"  aria-label="Close" onClick={()=>props.setFilter(props.filter.filter(x=>x != elem))}></button>
                        </div>);
                })}
                </Card.Body>
            </Card>
        </>
    );
};

export default Keywords