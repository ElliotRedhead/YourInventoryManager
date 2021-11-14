# Developer Notes

## Useful Commands

### Example Insert Query

INSERT INTO "products"(name,quantity,"expiryDate","storageLocation",freezable,"createdAt","updatedAt","user.id") VALUES ('milk',1,NOW(),'fridge',false,NOW(),NOW(),1);

### Building In Production

Heroku will automatically run postinstall and start commands from the root directory.
Express is now configured to serve both the React client and data from the database.
(Ensure the NODE_ENV environmental variable is set to production.)
