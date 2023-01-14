import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Posts from './Posts';

const List = ({ users }) => {
    return (
        <div>
            {users.map((user) => 
                <Accordion key={user.id}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography> {user.id}. {user.name} </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                            <Posts posts={user.posts} />
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            )}
        </div>
    );
    
}

export default List;