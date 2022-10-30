project :
	npx parcel public/robot.html
test : 
	NODE_OPTIONS=--experimental-vm-modules npx jest --env=jsdom

generate_puzzle :
	npx parcel public/robotGen.html --host 0.0.0.0
