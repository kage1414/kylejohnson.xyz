package main

import (
	"context"

	"kylejohnson-xyz/ent"
)

func script(ctx context.Context, client *ent.Client) {
	client.
		Invite.
		Delete().
		ExecX(ctx)
	client.
		User.
		Delete().
		ExecX(ctx)
	// client.
	//
	//	Invite.
	//	Create().
	//	SetKey("asdf").
	//	SetEmail("kylejohnson92294@gmail.com").
	//	SaveX(ctx)
}
