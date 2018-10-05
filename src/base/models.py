from django.db import models


class Resource(models.Model):
    """
    Model that represents an web resource.
    """

    url = models.URLField()

    def __str__(self):
        return self.url