alias air='$(go env GOPATH)/bin/air'
cd ui;
npx yarn dev & (cd .. && air);