"""Slack bot community command."""

from django.conf import settings

from apps.common.constants import NL
from apps.slack.apps import SlackConfig
from apps.slack.blocks import markdown
from apps.slack.template_system.loader import env
from apps.slack.utils import get_text

COMMAND = "/community"


def community_handler(ack, command, client):
    """Handle the Slack /community command.

    Args:
        ack (function): Acknowledge the Slack command request.
        command (dict): The Slack command payload.
        client (slack_sdk.WebClient): The Slack WebClient instance for API calls.

    """
    ack()

    if not settings.SLACK_COMMANDS_ENABLED:
        return

    template = env.get_template("community.txt")
    rendered_text = template.render(
        community_url="https://nest.owasp.dev/community/users/",
        community_name="OWASP community",
        NL=NL,
    )
    blocks = [markdown(rendered_text)]

    conversation = client.conversations_open(users=command["user_id"])
    client.chat_postMessage(
        blocks=blocks,
        channel=conversation["channel"]["id"],
        text=get_text(blocks),
    )


if SlackConfig.app:
    community_handler = SlackConfig.app.command(COMMAND)(community_handler)
